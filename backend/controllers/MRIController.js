import MRISchema from '../model/MRI';

// create and save new MRI
const create = (req,res) => {

    // validate request
    if(!req.body){
        res.status(400).send({message:"content cannot be empty"});
        return;
    }

    // new MRI
    const MRI = new MRISchema({
        name:req.body.name,
        email:req.body.email,
    })

    // save MRI in the database
    MRI
    .save(MRI)
    .then(data=>{
        res.send(data)
    })
}

// retrieve and return all MRIs
const find = (req,res)=>{
    MRISchema.find()
    .then(MRI=>{
        res.send(MRI)
    })

    .catch(err=>{
        res.send(500).send({message:err.message || "Error while retrieving MRI information"})
    })
    
}

// update a new identified MRI
const update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({messsage: "data to update cannot be empty"})
    }

    const id = req.params.id;
    MRISchema.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot update MRI with ID ${id}. Maybe MRI not found.` });
        } else {
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({ message: "error update MRI information" });
    });
}


// delete a MRI
const Delete = (req,res)=>{
    const id = req.params.id;
    MRISchema.findByIdAndDelete(id)
    then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot delete MRI with ID ${id}. Maybe id is wrong` });
        }
        else{
            res.send({
                message: "MRI deleted sucessfully"
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