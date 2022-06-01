# basic-express-server

## Herkuo deplyed link on main branch
[shams-basic-express-server](https://shams-basic-express-server.herokuapp.com/)


## Action link:
[action](https://github.com/shamssar/basic-express-server/actions/workflows/node.js.yml)


## Pull request:
[pull requests](https://github.com/shamssar/basic-express-server/pull/3)


## Route:
Method: GET

Path: /person



## middleware:

- logger.js: Performs a console.log with the request method and path

- validator.js: Checks the query string for a name property

## Error-handlers:
- 404
- 500

## Testing:
### server.test.js tests:

- Handle not found request

- Bad method

- Home route

### validator.test.js tests

- name is in the query string

- Output object is correct

- name is empty

- name is not string

### logger.test.js
 - it is logging something or routes 2-it is calling next
 ## Deploy
 - ACP
 - All Checked done 
 - Deploy on Herkuo.