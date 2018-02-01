# Starsurfing

Live link - http://star-surfing.herokuapp.com/

Starsurfing is a full-stack web application inspired by the Couchsurfing website. It allows users to create profiles and send requests to other users to stay at their place, with absolutely no monetary cost. Starsurfing is a futuristic twist on the original concept, with users visiting users from other stars, instead of other cities.

This project was implemented with a Ruby on Rails backend, using React.js and Redux.

## Features & Implementation

* User account creation, including uploading of profile images

* User authentication using BCrypt

``` Ruby
def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end
```

* Splash page, with an index of all stars that have hosts

* Show page for each star, featuring Google Maps integration and an index of users at that star

![Star show page](https://i.imgur.com/nTgmdwD.png)

* Profile page for each user, showing unique information about them

* Review functionality, allowing users to Create Read Update and Destroy reviews.

``` Ruby
def create
  @review = Review.new(review_params)
  @review.author_id = current_user.id
  if @review.save
    render :show
  else
    render json: @review.errors.full_messages, status: 422
  end
end

...

def update
  @review = Review.find(params[:id])
  if @review.update(review_params)
    render :show
  else
    render json: @review.errors.full_messages, status: 422
  end
end

def destroy
  @review = Review.find(params[:id])
  @review.destroy!
  render :show
end
```

![User show page](/screenshots/user-show.gif)

* Request functionality (bookings), letting users make requests to stay with other users and approve or deny requests made to them

* Search bar (no plugin), with results leading to Star show pages

``` JSX
if (this.state.value.length > 0 && results.length === 0) {
    if (this.state.isLoading === false) {
      if (results.length === 0) {
        results = [
          <button className='search-result'>
            No results found
          </button>
        ]
      }
    } else {
      results = [
        <button className='search-result'>
          Loading...
        </button>,
      ];
    }
  }
}
```

![Starsurfing](https://i.imgur.com/xbweDkF.png)

* CSS styling, including breakpoints to allow functionality on smaller screens and mobile devices

``` CSS
@media only screen and (max-width: 780px) {
  .user-show-container {
    flex-direction: column;
    align-items: center;
    width: 600px;
  }

  .user-right-side {
    width: 60%;
    margin-left: 50px;
  }

  .user-show {
    height: 100%;
  }

}
```

![Breakpoints](/screenshots/breakpoints.gif)
## Project Design
I completed Starsurfing over the course of two weeks, though I have continued to polish it and add new features. Before starting, I completed a project outline including a [feature list](https://github.com/TheSlyPig/star-surfing/wiki/MVP-List), [wireframes](https://github.com/TheSlyPig/star-surfing/wiki/Wireframes), a [component hierarchy](https://github.com/TheSlyPig/star-surfing/wiki/Component-Hierarchy), a projected [sample state](https://github.com/TheSlyPig/star-surfing/wiki/Sample-State), [routes](https://github.com/TheSlyPig/star-surfing/wiki/Routes), and expected [database schema](https://github.com/TheSlyPig/star-surfing/wiki/Database-Schema).
