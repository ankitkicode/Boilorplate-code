exports.excludeProperties = (obj, excludeList) => {
    return Object.keys(obj).reduce((acc, key) => {
        if (!excludeList.includes(key)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
};

exports.createDocument = async (Model, data) => {
    const document = new Model(data);
    return await document.save();
};

exports.findDocuments = async (Model, query = {}, projection = {}, options = {}) => {
    return await Model.find(query, projection, options);
};

exports.findOneDocument = async (Model, query = {}, projection = {}) => {
    return await Model.findOne(query, projection);
};

exports.updateDocument = async (Model, query, updateData, options = { new: true }) => {
    return await Model.findOneAndUpdate(query, updateData, options);
};

exports.deleteDocument = async (Model, query) => {
    return await Model.findOneAndDelete(query);
};

exports.findWithPagination = async (Model, query = {}, page = 1, limit = 10, projection = {}) => {
    const skip = (page - 1) * limit;
    const documents = await Model.find(query, projection)
        .skip(skip)
        .limit(limit);
    const total = await Model.countDocuments(query);
    
    return {
        documents,
        total,
        page,
        pages: Math.ceil(total / limit),
    };
};

exports.aggregateDocuments = async (Model, pipeline = []) => {
    return await Model.aggregate(pipeline);
};

exports.catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
