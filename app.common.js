//Conexión a mongodb

const mongoose = require('mongoose');

 const ConnectionToDataBase = async ()=>{
    try
    {
        await mongoose.connect('mongodb://localhost:27017/ecommerce2',{
            useNewUrlParser:true,
            useUnifiedTopology:true
            })
            console.log('...ok')
           
    }catch(err){
        console.log(err)
    }


}
const productoSchema= mongoose.Schema({
    title:String,
    price:Number,
    img:String 
}, {versionKey:false})
const ProductoModel = mongoose.model('productosdatas', productoSchema)
ConnectionToDataBase()

// mostrar

const mostrar = async ()=>{
    const produstosLista = await ProductoModel.find()
    //console.log(produstosLista)
}


//Crear
const crear = async ()=>{
    const producto = new ProductoModel({
        title: 'lipstick yellow', 
        price: 892, 
        img:"http//img"
    })
    const resultado = await producto.save()
}

//editar

const actualizar = async (id)=>{
    const producto = await ProductoModel.updateOne({_id:id}, 
    {
        $set:{
            title:'lipstick modificado', 
            price: 1866, 
        }
    })
}

//eliminar 
const eliminar = async (id)=>{
    const producto = await ProductoModel.deleteOne({_id:id})
  //  console.log(producto)
}
// llamar a los procesos de crud
//crear()
//mostrar()
//actualizar('616595b604b9222b9a3853a2')
//eliminar('66164c934d44a5f4fd1963abd')