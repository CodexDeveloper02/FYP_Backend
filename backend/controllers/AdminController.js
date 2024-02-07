import AdminSchema from '../model/Admin';

const create = (req,res) => {
    if(!req.body){
        res.status(400).send({message:"content cannot be empty"});
        return;
    }

    const admin = new AdminSchema({
        name:req.body.name,
        email:req.body.email,
    })

    admin
    .save()
    .then(data=>{
        res.send(data)
    })
}

const find = (req,res)=>{
    AdminSchema.find()
    .then(admins=>{
        res.send(admins)
    })

    .catch(err=>{
        res.send(500).send({message:err.message || "Error while retrieving admins information"})
    })
    
}

const update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({messsage: "data to update cannot be empty"})
    }

    const id = req.params.id;
    AdminSchema.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot update admin with ID ${id}. Maybe admin not found.` });
        } else {
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({ message: "error update admin information" });
    });
}

const Delete = (req,res)=>{
    const id = req.params.id;
    AdminSchema.findByIdAndDelete(id)
    then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot delete admin with ID ${id}. Maybe id is wrong` });
        }
        else{
            res.send({
                message: "admin deleted sucessfully"
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