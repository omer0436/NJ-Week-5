import User from "../model/user-model.js"

const getAllUser = async () => {
    const users = await User.findAll()
    return users
}

const deleteUser = async (userId) => {
    const deleted = await User.destroy (userId)
    return deleted
}

const createUser = async (pUser) => {
    const create = await User.create (pUser)
    return create;

}

export default {getAllUser, deleteUser,createUser}