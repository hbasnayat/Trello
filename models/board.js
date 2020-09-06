var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    userid:{type:String},
    swimlane: [{    
        name:{type:String},
        card:[{
            name:{type:String}
        }]
    }],
    name: {type: String,required:true}
});

schema.plugin(mongooseUniqueValidator);
/**
 * board.findOne({_id: sdfy,'swimlane._id':sgg}, {'swimlane.$':1}, (err, data)=>{
 *      var card = data.swimlane[0].card;
 *      var newCard = card.map(ele=>{
 *          if(ele._id===req.body.cardid){
 *              ele.name=req.body.name;
 *              return ele
 *          }else{
 * 
 *              return map
 *          }
 *      })
 *      board.findOneAndUpdate({_id: sdfy,'swimlane._id':sgg}, {$set:{'swimlane.$.card':newcard}}, (err, data)=>{
 * })
 */

module.exports = mongoose.model('Board', schema);