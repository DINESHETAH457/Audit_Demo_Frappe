// Copyright (c) 2024, demo and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Client Side Scripting", {
	//refresh(frm) {
        // frappe.msgprint({
        //     title: __('Missing Mandatory Field'),
        //     message: __('The field <b>{0}</b> is mandatory.', [__('Relation')]),
        //     indicator: 'orange'
        // });

        //  frappe.throw("This is an <b>Error</b>")
        //   frappe.msgprint("Hello DC-Code from 'refresh' event")
    // onload: function(frm) {
    //     frappe.msgprint("Hello DC-Code from 'onload' event")
    // }
    // validate: function(frm){
    //     frappe.throw("This is an <b>'Validate' event </b>")
    // }
    // before_save: function(frm){
    //     frappe.throw("This is an <b>'before_save' event </b>")
    // }

    // after_save: function(frm){
    //       frappe.throw("This is an <b>'after_save' event </b>")
    //     }

    // enable: function(frm){
    //     frappe.msgprint("This is an <b>'enable field' event </b>")
    // }
    // Age: function(frm){
    //     frappe.msgprint("This is an <b>'Age field' event </b>")
    // }

    // family_members_on_form_rendered: function(frm) {
    //     frappe.msgprint("This is an <b>'familiy_members child table rendered' event </b>")
    // }

    // before_submit: function(frm){
    //     frappe.throw("This is an <b>'before_submit' event </b>")
    // }

    // on_submit: function(frm){
    //     frappe.msgprint("This is an <b>'on_submit' event </b>")
    // }


    // after_cancel: function(frm){
    //     frappe.msgprint("This is an <b>'after_cancel' event </b>")
    // }
    
    // before_cancel: function(frm){
    //     frappe.throw("This is an <b>'after_cancel' event </b>")
    // }

    /////////////////////////////////////// Child Table Scripts /////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
//frappe.ui.form.on("Family Members",{
    // cdt is Child doctype name i.e Family Members
    // cdn is the row name

    // name1 : function(frm){
    //     frappe.msgprint("This is an <b>'name1' child doctype event </b>")
    // }

//     age (frm, cdt, cdn){
//         frappe.msgprint("This is an <b>'age' child doctype event </b>")
//     }



// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////  Values Fetching /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// frappe.ui.form.on("Client Side Scripting",{
//     // Here, fetching the values from the doctype
//     // Here, will get full name 
//     after_save: function(frm){
//         frappe.msgprint(__("The Full name is '{0}'",  // here is full name one variable 
//                 [frm.doc.first_name + " " + frm.doc.middle_name +" " + frm.doc.last_name])) // this is here adding first, middle, last name with "" space
        
//         for (let row of frm.doc.family_members) {
//             frappe.msgprint(__("{0}. The Family Member name is '{1}' and relation is '{2}'",
//                 [row.idx, row.name1, row.relation]))  // here is the three variable is index, name, relation
//         }

//     }

// });


///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// frm.set_intro & frm.is_new()//////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

//frappe.ui.form.on("Client Side Scripting", {
//     refresh: function(frm){ 
//         // Here,we will show on the set intro message at the first page

//         // frm.set_intro('Now you can createda a new client side scripting doctype')

//         // Here, after submit we will show new message on the screen same new page
//         if (frm.is_new()){
//             frm.set_intro('Now you can createda a new client side scripting doctype')
//         }
//     }

// });


////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// frm.set_value  /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


// frappe.ui.form.on("Client Side Scripting", {
//     validate: function(frm){ 

//         //frm.set_value('full_name', frm.doc.first_name +" "+ frm.doc.middle_name + " "+ frm.doc.last_name)
//         // which field name as full_name and added three values first_name, middle_name, last_name will retain full_name

//         // let how to added or set child table value

//         let row = frm.add_child("family_members", {
//             name1: 'Johnson',
//             age: '45',
//             relation: 'Son'
//         });

//         // Refresh the child table to show the newly added row
//         frm.refresh_field("family_members");
        
//     }

// });



////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// EVENT  /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


// frappe.ui.form.on("Client Side Scripting", {
//     enable: function(frm){ 

//         //frm.set_df_property('first_name', 'reqd', 1)   // if enable check is not tick then first_name field is not mandatory 
//         //frm.refresh_field('first_name');
//         // if enable check is tick then first_name field is mandatory.

//         //frm.set_df_property('middle_name', 'read only', 1)
//         //frm.refresh_field('middle_name');

//         frm.toggle_reqd('age',true) // It can be used for the above cases same 


        
//     }

// });


////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Button /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


// frappe.ui.form.on("Client Side Scripting", {
//     refresh : function(frm){ 
//         // Here, created or added custom_button and clicked and see popup message
//         // frm.add_custom_button('Click Me Button',() =>{
//         //     frappe.msgprint(__('You Clicked Me !!'));
//         // })
//         frm.add_custom_button('Click Me 1'),() =>{
//             frappe.msgprint(__('You Clicked Me 1 !!'));
//         }, 'Click Me')

//         frame.add_custom_button('Click Me',() =>{
//             frappe.msgprint(__('You Clicked Me 2 !!'));

//         })
        
//     }

// });


// frappe.ui.form.on("Client Side Scripting", {
//     refresh: function(frm) { 
//         // Correctly add the first custom button
//         frm.add_custom_button('Click Me 1', () => {
//             frappe.msgprint(__('You Clicked Me 1 !!'));
//         }, 'Click Me');

//         // Correctly add the second custom button
//         frm.add_custom_button('Click Me 2', () => {
//             frappe.msgprint(__('You Clicked Me 2 !!'));
//         }, 'Click Me');
//     }
// });



