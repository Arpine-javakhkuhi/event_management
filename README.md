Project title: Event Management Platform
Project Description: This is a simple event management platform that allows users to create, view, and manage events.

## Setup Aws
1. Got to https://aws.amazon.com/, create an account
2. In 'Access keys" section create Access key (save .csv file, it will be needed later)
3. Configure Amplify https://docs.amplify.aws/react/start/project-setup/prerequisites/
4. In terminal run amplify init (follow the steps):
  * Enter a name for the project eventmanagement - choose a desired name
  * Initialize the project with the above configuration? -> Yes
  * Select the authentication method you want to use: -> select 'AWS access keys' (they are in your profile)
  * region: -> choose your region
5. Configute Auth UserPool -> go to Amazon Cognito, create user pool
  * Cognito user pool sign-in options -> choose email
  * Configure sign-up experience: -> Required attributes -> choose needed attribute(in our cases there are 'family_name' and 'name'
  * Configure message delivery: -> choose 'Send email with Cognito'
  * Integrate your app: Client secret -> choose 'Generate a client secret'
6. in terminal ->  'amplify add auth'
    * Do you want to configure advanced settings? ❯ Yes, I want to make some additional changes. ->  What attributes are required for signing up? Email, Family 
      Name, Name
7. 'amplify push' in terminal
8. 'amlify add api' in termianl -> setup graphql

## Installation
1. Clone the repository: git clone git@github.com:Arpine-javakhkuhi/event_management.git

2. cd event-management
3. npm install
4. npm run dev


 
