let users = [
    {"id" : 1, "name" : "Yadnyesh Halde", "email" : "yadnyesh@gail.com" , "password" : "yadnyesh123"},
    {"id" : 2, "name" : "Stavan Halde", "email" : "stavan@gail.com" , "password" : "stavan123"},
    {"id" : 3, "name" : "Hemant Halde", "email" : "hemant@gail.com" , "password" : "hemant123"},
]


const getUser = (name , email) => {
    return users.find(user => user.email == email)
    // in mongo `` return Users.findOne({"name" : name})
}

const addUser = (name, email, password) => {
    
    let user = {
        "id" : users.length + 1,
        "name" : name,
        "email" : email,
        "password" : password
    }

    users.push(user)
    return user
}

export  {addUser, getUser}