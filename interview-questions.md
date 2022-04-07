# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:
  The foreign key always goes on the belongs_to side. By convention the foreign key should always be the modelname_id which is cohort_id wherein the Student belongs to a Cohort, and a Cohort has many students.

  Researched answer:
  The Student model is created to have an association with the Cohort model to prevent creating lots of columns for all the possible students the Cohort may have.



2. Which RESTful routes must always be passed params? Why?

  Your answer: 
  There are seven RESTful routes but in my opinion, there are only four that must always be passed params and they are: Show, Update, Edit, and Destroy. These 4 routes must be passed params because they perform certain actions on specific data.

  Researched answer:
  According to my research, the RESTful routes
  Without Params:
  The create route is: post '/resources' => 'resources#create'
  The index route is: get '/resources' => 'resources#index'
  with Params:
  The new route is: get '/resources/new' => 'resources#new'
  The update route is: put/patch '/resources/:id' => 'resources#update'
  The delete route is: delete '/resources/:id' => 'resources#destroy'
  The show route is: get '/resources/:id' => 'resources#show'


3. Name three rails generator commands. What is created by each?

  Your answer:
  rails generate model - allows us to create new model. The name of the model is uppercase and singular by convention. 

  rails generate controller - wherein the controller is responsible for routing external requests to internal actions. 

  rails generate resource - creates the Model and Controller for an application.

  Researched answer: 
  rails generate model takes the name of the model we intend to create, the name of each column, and the data type of each column as arguments.

  rails generate controller creates tthe Controller which is the logical center of your application. It coordinates the interaction between the user, the views, and the model.

  rails generate resource creates a migration in database, user model in the application, user controller, routes and more tests.




4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students  
Index - displays all the data in the students table


action: "POST"   location: /students  
Create - creates new data in the students table   

action: "GET"    location: /students/new
New - shows forms that contains text field for user to input values

action: "GET"    location: /students/2
Show - displays one student based on the primary key in the url, this will be id: 2 

action: "GET"    location: /students/2/edit
Edit - shows a form that displays the edit form based on ID in the url, the id is 2.    

action: "PATCH"  location: /students/2 
Update - modifies an existing student based on the ID in the url, which is 2.     

action: "DELETE" location: /students/2      
Destroy - Deletes one student based on the ID in the URL, which is 2.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As a user, I can create/add a new to-do-list.
- As a user, I can name my to-do-list.
- As a use, I can renamne my to-do-list
- As a user, I can add description on my to-do-list.
- As a user, I can set start date of my to-do-list
- As a user, I can set due date of my to-do-list.
- As a user, I can mark my to-do-list with "complete" or "not complete"
- As a user, I can sort my to-do-list according to completion status.
- As a user, I can search for the name of my to-do-list.
- As a user, I can delete an existing to-do-list.
