# Copyright (c) 2024, demo and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ServerSideScripting(Document):
	# Here we used to all confroller and function 

     ## 1 #########################################################
#############################################################
########################### Server Side Events ##############
	# def validate(self):
	# 	frappe.msgprint("Welcome To Server Side Scripting from \n <br>'Validate'<br> Event")


	# def before_save(self):
	# 	frappe.msgprint("Welcome To Server Side Scripting from \n <br>'before_save'<br> Event")

	def before_insert(self):
		frappe.msgprint("Welcome To Server Side Scripting from \n <br>'before_insert'<br> Event")
	
	





    



