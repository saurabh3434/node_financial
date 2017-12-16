/**
 * HomeControllerController
 *
 * @description :: Server-side logic for managing Homecontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function(req,res){
        if(!req.user){
            return res.view('homepage',{
                user: req.user,
                username:"",
                picture: "",
                slug: ""
            });
        }
        else{
            return res.view('homepage',{
                user: req.user,
                username:req.user.username,
                picture: req.user.picture,
                slug: req.user.slug
            });
        }
    },
    login: function(req,res){
        return res.view('login',{
            layout: 'loginsign.ejs'
        });
    },
    signup: function(req,res){
        return res.view('signup',{
            layout: 'loginsign.ejs'
        });
    },
    about: function(req,res){
        if(!req.user){
            return res.view('pages/about',{
                user: req.user,
                username:"",
                picture: "",
                slug: ""
            });
        }
        else{
            return res.view('homepage',{
                user: req.user,
                username:req.user.username,
                picture: req.user.picture,
                slug: req.user.slug
            });
        }
    }
};

