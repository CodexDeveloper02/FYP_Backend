import ResultSchema from '../model/Result';

// create and save new result
const create = (req,res) => {

    // validate request
    if(!req.body){
        res.status(400).send({message:"content cannot be empty"});
        return;
    }

    // new result
    const result = new ResultSchema({
        name:req.body.name,
        email:req.body.email,
    })

    // save result in the database
    result
    .save()
    .then(data=>{
        res.send(data)
    })
}

// retrieve and return all results
const find = (req,res)=>{
    ResultSchema.find()
    .then(result=>{
        res.send(result)
    })

    .catch(err=>{
        res.send(500).send({message:err.message || "Error while retrieving result information"})
    })
    
}

// update a new identified result
const update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({messsage: "data to update cannot be empty"})
    }

    const id = req.params.id;
    ResultSchema.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot update result with ID ${id}. Maybe result not found.` });
        } else {
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({ message: "error update result information" });
    });
}


// delete a result
const Delete = (req,res)=>{
    const id = req.params.id;
    ResultSchema.findByIdAndDelete(id)
    then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot delete result with ID ${id}. Maybe id is wrong` });
        }
        else{
            res.send({
                message: "result deleted sucessfully"
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