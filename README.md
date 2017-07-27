# create-jira-ticket-api
create jira issue tickets - using the REST API 2 - within node


## Installing

Using npm:

```bash
$ npm install create-jira-ticket-api --save
```
```
var jira = require('create-jira-ticket-api');
```


## Example

```javascript
var jira = require('create-jira-ticket-api');

var options = {
	config: {
		"host": "your jira host",
		"username": "your jira username",
		"password": "your jira password",
		"datatype": "json"
	},
	data: {
		"fields": {
			"project": {
				"key": "project key"
			},
			"summary": "your summary",
			"description": "your description",
			"issuetype": {
				"name": "your issuetype"
			},
			"priority": {
				"name": "Minor"
			}
		}
	}
}

jira.post(options, function(response) {
	//
});

```

## License

MIT
