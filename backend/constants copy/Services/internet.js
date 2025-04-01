export const checkInternetConnection = async (navigate = null, onRetry = null) => {
  try {
    const online = window.navigator.onLine;
    if (!online) {
      return showNoInternetScreen(navigate, onRetry);
    }
    return true;
  } catch {
    return showNoInternetScreen(navigate, onRetry);
  }
};

const showNoInternetScreen = (navigate = null, onRetry = null ) => {
  if (navigate) {
    navigate("/no-internet", {
      state: {
        onRetry: onRetry || (() => console.log("Retry function not provided.")),
      },
    });
  }

  return {
    message: "No internet connection!",
    retry: onRetry || (() => console.log("Retry function not provided.")),
  };
};
