const models = require('../models');


exports.getTodos = async (req, res) => {
  try{
    const id = req.query.activity_group_id;
    if(!id){
      const result = await models.todos.findAll();
      return res.status(200).json({
        status: 'Success',
        message: 'Success',
        data: result
      });  
    }

    const result = await models.todos.findAll({
      where: {
        activity_group_id: id
      }
    })

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

exports.getTodo = async (req, res) => {
  try{
    const id = req.params.id;

    const result = await models.todos.findOne({
      where:{
        id: id
      }
    });

    if(!result){
      return res.status(404).json({
        status: "Not Found",
        message: `Todo with ID ${id} Not Found`
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

exports.addTodo = async (req, res) => {
  try{

    const {
      title, 
      activity_group_id,
      is_active
    } = req.body

    //TODO Check Req.body Not Null

    if(Object.keys(req.body).length === 0){
      return res.status(400).json({
        status: "Bad Request",
        message: "title cannot be null"
      });
    }
    const result = await models.todos.create({
      title: title,
      activity_group_id: activity_group_id,
      is_active: is_active,
      created_at: new Date(),
      updated_at: new Date()
    });

    return res.status(201).json({
      status: 'Success',
      message: 'Success',
      data: result
    });

  }catch(error){
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      err_message: error.message
    })
  }
}

exports.updateTodo = async (req, res) => {
  try{
    const id = req.params.id;

    const {
      title,
      priority,
      is_active,
      status
    }= req.body;

    updated_at = new Date();

    const findTodoById = await models.todos.findOne({
      where:{
        id: id
      }
    });

    if(!findTodoById){
      return res.status(404).json({
        status: "Not Found",
        message: `Todo with ID ${id} Not Found`
      })
    }

    const result = await models.todos.update({
        title: title, 
        priority: priority,
        is_active: is_active,
        status: status,
        updated_at: updated_at
      },{
        where:{
          id: id
      }
    });

    const data = await models.todos.findOne({
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

exports.deleteTodo = async (req, res) => {
  try{
    const id = req.params.id;
    const findTodoById = await models.todos.findOne({
      where:{
        id: id
      }
    });

    if(!findTodoById){
      return res.status(404).json({
        status: "Not Found",
        message: `Todo with ID ${id} Not Found`
      })
    }

    const result = await models.todos.destroy({
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
