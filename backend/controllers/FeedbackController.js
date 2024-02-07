import FeedbackSchema from '../model/Feedback';

// create and save new Feedback
const create = (req,res) => {

    // validate request
    if(!req.body){
        res.status(400).send({message:"content cannot be empty"});
        return;
    }

    // new Feedback
    const Feedback = new FeedbackSchema({
        name:req.body.name,
        email:req.body.email,
    })

    // save Feedback in the database
    Feedback
    .save(Feedback)
    .then(data=>{
        res.send(data)
    })
}

// retrieve and return all Feedbacks
const find = (req,res)=>{
    FeedbackSchema.find()
    .then(Feedback=>{
        res.send(Feedback)
    })

    .catch(err=>{
        res.send(500).send({message:err.message || "Error while retrieving Feedback information"})
    })
    
}

// update a new identified Feedback
const update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({messsage: "data to update cannot be empty"})
    }

    const id = req.params.id;
    FeedbackSchema.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot update Feedback with ID ${id}. Maybe Feedback not found.` });
        } else {
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({ message: "error update Feedback information" });
    });
}


// delete a Feedback
const Delete = (req,res)=>{
    const id = req.params.id;
    FeedbackSchema.findByIdAndDelete(id)
    then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot delete Feedback with ID ${id}. Maybe id is wrong` });
        }
        else{
            res.send({
                message: "Feedback deleted sucessfully"
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