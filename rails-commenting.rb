# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Controller is the logical center of a Rails application. Inside the controller (BlogPostsController), we define what we want to happen when a method is reached. In this case, we have index as the method.
class BlogPostsController < ApplicationController
  def index
    # ---2) An instance variable called "posts" is declared and is set to: as all the values in a table called "BlogPost".
    @posts = BlogPost.all
  end

  # ---3) A "show" method is defined and an instance variable called "post" contains all values in the "BlogPost" table. Each value in that table can be accessed by specificly calling onto its id/primary key using the .find method.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) A method named "new" is defined and an instance variable called "post" is set to BlogPost.new which will let you input and create new data into the table.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) In the create method, an instance variable named "post" is set to BlogPost.create that contains params named "blog_post_params". This method lets the user create new blog posts. If the post is valid, it will redirect to the page where you could view all the existing posts along with the new one that was just recently created as @post = BlogPost.all. Anything other than valid, the Else statement will let the user remain on that page and will be able to create a new post. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) In the edit method, an instance variable named "post" is defined and set to BlogPost.find that takes a parameter of an id/primary key. This method lets you access and edit an existing blog post by addressing it by its id or primary key.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) In the update method, an instance variable called 'post' is set to update method that takes in a strong params of 'blog_post_params'. The Updatehe method contains a conditional statement as follows: if the post is valid which is referring to if there are no errors or if they meet the required validations, then it will redirect it to the index page that contains all blog post (@post = BlogPost.all). If it does not meet the validation, then it will go to the page where you can edit the blog post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) In this destroy method, the else condition will let the user stay on the same page/view if the blog post is UNABLE to be destroyed. As seen above, if it has been successfuly destroyed, it will redirect to the page that has all the blog posts.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private is a keyword in Ruby that restricts the scope of where a method can be called. 
  private
  def blog_post_params
    # ---10) Since strong params are only meant to be used as arguments to controller methods, we can list them as private to the controller class, that way there is no chance they can be called from somewhere else in the program. In this case, it will only require parameters from the model blog_post
    params.require(:blog_post).permit(:title, :content)
  end
end
