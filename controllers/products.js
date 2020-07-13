const Product = require('../models/Products');

exports.createProduct = async (req, resp) => {

   const products = req.body;

   console.log(JSON.stringify(products, null, 2));

    try{
       let product;

       product = new Product(req.body);
      //  await product.save();

      //  resp.json('Producto creado correctamente');

    }catch(error){
       console.log(error);
       resp.status(400).send('Hubo un error');
    }
}

exports.getProducts = async (req, resp) => {

   try {
     const products =  await Product.find({});
     console.log();
     resp.json(products);

   } catch (error) {
      console.log(error);
      //resp.status(400).send('Error');
   }
}

exports.getProductsByCategories = async (req, resp) => {

   try {
     const category = req.params.category;
     const products =  await Product.find({ category: category});
     console.log();
     resp.json(products);

   } catch (error) {
      console.log(error);
      //resp.status(400).send('Error');
   }
}

exports.getProductsByWords = async (req, resp) => {

   try {
     const word = req.params.word;
     const products =  await Product.find({name: {$regex: word, $options: 'i'}}, function(err, result){

      if(err){
         resp.json(result);
         console.log(err);
      }
      else{
         resp.json(result);
         console.log(result);
      }

   });


   } catch (error) {
      console.log(error);
      //resp.status(400).send('Error');
   }
}

exports.getDetailProduct = async (req, resp) => {

   try {
     const idProduct = req.params.id;
     console.log('asas', idProduct);
      await Product.findOne({ _id: idProduct}, (err, person) => {
         if(err){
            resp.json(err);
            console.log('si llega..');
         }else{
            console.log('si llega..');
            resp.json(person);
         }
     });
   //   resp.json(product);

   } catch (error) {
      console.log(error);
      //resp.status(400).send('Error');
   }
}

