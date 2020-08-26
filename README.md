# user-interface-zave
☝️ Proposal

What problem does your app solve?
	Help hosts find guests and plan a stay at an optimal price.
Be as specific as possible; how does your app solve the problem?
	Recommend the best competitive price for the host’s property.
What is the mission statement?
	Help the guest the best price possible and increase customers for the host.
💡 Features

What features are required for your minimum viable product?
	Web
A user can register and login to their account.
A user can add their AirBnB listings to their profile.
A user can edit properties about each listing (ex: room type, minimum number of nights, location.)
 Make sure to collaborate with the DS students on the best data to send to them. When properties are saved, the data is sent to the DS API and the returned optimal price is dynamically saved for the current property.
A user can edit properties for their listings and get an updated optimal price.
A user can delete listings.
DS
Train a predictive model on AirBnB prices using historical data.
Make predictions accessible to the rest of the team. (Ex: deploy via a Flask API [or equivalent] to receive inputs (location, size, etc) and output predicted optimal price in JSON format.

What features may you wish to put in a future release?
	Web:
A user can add pictures to their listings using an API like Cloudinary.
A user can set their database to check the optimal price at certain intervals (weekly, monthly) and they are alerted when there is a change via email or text.
DS
Use feature importances to create visual recommendations to user (ex: You're in the green zone in terms of location, but your availability is in the red zone).

What do the top 3 similar apps do for their users?
https://www.vrbo.com/
https://www.airdna.co/blog/vacation-rental-pricing-real-time-demand
https://www.airbnb.com/
https://airbnbsmart.com/airbnb-automated-pricing-tools/
https://www.homeaway.com/
🛠 Frameworks - Libraries

What 3rd party frameworks/libraries are you considering using?
React
Styled Components
Java Spring
Java Boot
Maven
Jackson
Hibernate
Java API
JUnit
Tomcat
Do the APIs you need require you to contact them to gain access?
	No
Are you required to pay to use said API(s)?
No
🧮 For Data Scientists

Describe the established data source with at least rough data able to be provided on day one.
http://insideairbnb.com/get-the-data.html
Write a description for what the data science problem is. What uncertainty or prediction are you trying to discover? How could this data be used to find a solution to this problem?
We are trying to figure out what the optimal price is for a user to predict the trends for optimal pricing for their properties based on variables such as location, time of year and other considerations. The data will be based on historical data from AirBnB’s prices via training a model.
What kind of target output can you deliver to the Web/UX/iOS teams to work with? Is it in JSON format or something else?

JSON
🎯 Target Audience

Who is your target audience? Be specific.
New Airbnb hosts who may not be familiar with optimal pricing and marketing of their property.
What feedback have you gotten from potential users? N/A
Have you validated this problem and your solution with a target audience? Describe how, N/A

🔑 Prototype Key Feature(s)

How long do you think it will take to implement these features? 4 days
Do you anticipate working on stretch functionality after completion of a Minimal Viable Product? Yes

