const models = require('../models');


exports.getActivities = async (req, res) => {
  try{
    const result = await models.activities.findAll()

    return res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: result
    })
  }catch(error){
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      err_message: error.message
    })
  }
}

exports.getActivitiy = async (req, res) => {
  try{
    const id = req.params.id;

    const result = await models.activities.findOne({
      where:{
        id: id
      }
    });

    if(!result){
      return res.status(404).json({
          status: "Not Found",
          message: `Activity with ID ${id} Not Found`
      })
    }

    return res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: result
    })

  }catch(error){
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      err_message: error.message
    })
  }
}

exports.addActivitiy = async (req, res) => {
  try{
    
    const {
      title, 
      email
    } = req.body;

    //TODO  CHECK title not be null
    if(!title.trim().length){
      return res.status(400).json({
        status: "Bad Request",
        message: "title cannot be null"
      });
    }

    const result = await models.activities.create({
      title: title,
      email: email,
      created_at: new Date(),
      updated_at: new Date()
    })

    return res.status(201).json({
      status: 'Success',
      message: 'Success',
      data: result
    })


  }catch(error){
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      err_message: error.message
    })
  }
}

exports.updateActivitiy = async (req, res) => {
  try{
    const id = req.params.id;
    const {title} = req.body;
    
    if(Object.keys(req.body).length === 0){
      return res.status(400).json({
        status: "Bad Request",
        message: "title cannot be null"
      });
    }

    update_at = new Date()

    const findByID = await models.activities.findOne({
      where:{
        id: id
      }
    });

    if(!findByID){
      return res.status(404).json({
          status: "Not Found",
          message: `Activity with ID ${id} Not Found`
      })
    }
    
    const result = await models.activities.update({
        title: title,
        updated_at: update_at
      },
      {
        where:{
          id: id
        }
    });

    if(!result){
      return res.status(400).json({
        status: 'Fail',
        message: `Fail to delete Activity with ID ${id}`
      })
    }

    const data = await models.activities.findOne({
      where:{
        id: id
      }
    });


    return res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: data
    })


  }catch(error){
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      err_message: error.message
    })
  }
}

exports.deleteActivitiy = async (req, res) => {
  try{
    const id = req.params.id;

    const findByID = await models.activities.findOne({
      where:{
        id: id
      }
    });

    if(!findByID){
      return res.status(404).json({
          status: "Not Found",
          message: `Activity with ID ${id} Not Found`
      })
    }

    const result = await models.activities.destroy({
      where:{
        id: id
      }
    });

    if(!result){
      return res.status(400).json({
        status: 'fail',
        messag: 'fail to delete User'
      });
    }

    return res.status(200).json({
      status: 'Success',
      messgage: 'Success',
      data: {}
    });
    
  }catch(error){
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      err_message: error.message
    })
  }
}

