import UserSchema from '../model/User';

// create and save new user
const create = (req,res) => {

    // validate request
    if(!req.body){
        res.status(400).send({message:"content cannot be empty"});
        return;
    }

    // new user
    const user = new UserSchema({
        name:req.body.name,
        email:req.body.email,
    })

    // save user in the database
    user
    .save(user)
    .then(data=>{
        res.send(data)
    })
}

// retrieve and return all users
const find = (req,res)=>{
    UserSchema.find()
    .then(user=>{
        res.send(user)
    })

    .catch(err=>{
        res.send(500).send({message:err.message || "Error while retrieving user information"})
    })
    
}

// update a new identified user
const update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({messsage: "data to update cannot be empty"})
    }

    const id = req.params.id;
    UserSchema.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot update user with ID ${id}. Maybe user not found.` });
        } else {
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({ message: "error update user information" });
    });
}


// delete a user
const Delete = (req,res)=>{
    const id = req.params.id;
    UserSchema.findByIdAndDelete(id)
    then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot delete user with ID ${id}. Maybe id is wrong` });
        }
        else{
            res.send({
                message: "user deleted sucessfully"
            })
        }
    })
}

export {
    create,
    update,
    Delete,
    find
}