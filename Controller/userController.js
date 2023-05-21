const model = require('../Model/userModel');
const user = model.userModel;




// controller  :

exports.getAllUser = async (req, res) => {
    const getUsers = await user.find({});
    res.json(getUsers);

};

exports.getUser = async (req, res) => {
    const paramsId = req.params.id;
    const getUserData = await user.findById(paramsId);
    res.json(getUserData);
}

exports.addUser = async (req, res) => {
    const addUserInfo = await user.insertMany({ ...req.body });
    res.json(addUserInfo);
};

exports.replaceUser = async (req, res) => {
    const paramsId = req.params.id;
    const userIndex = await user.findOneAndReplace({ _id: paramsId }, req.body, { new: true });
    res.json(userIndex);
};

exports.updateUser = async (req, res) => {
    const paramsId = req.params.id;
    const userIndex = await user.findByIdAndUpdate({ _id: paramsId }, req.body, { new: true });
    res.json(userIndex);

};

exports.removeUser = async (req, res) => {
    const paramsId = req.params.id;
    await user.findByIdAndDelete(paramsId);
    res.json({ "delete": "success" });

};