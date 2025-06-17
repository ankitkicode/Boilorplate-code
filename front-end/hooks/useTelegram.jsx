import { useEffect, useState } from "react";

const useTelegram = () => {
  const [tg, setTg] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window?.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      setTg(webApp);
      setUser(webApp.initDataUnsafe?.user || null);
    }
  }, []);

  const close = () => tg?.close();
  const expand = () => tg?.expand();

  return {
    tg,
    user,
    close,
    expand,
    initData: tg?.initData,
    initDataUnsafe: tg?.initDataUnsafe,
    colorScheme: tg?.colorScheme || "light"
  };
};

export default useTelegram;
