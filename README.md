
# Serverless Framework AWS NodeJS

This function is to get Geolocation Coordinates using GoogleMaps API


## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

After running deploy, you should see output similar to:

```bash
Deploying geolocation-dev to stage dev (us-east-1)

✔ Service deployed to stack geolocation-dev (112s)

functions:
  coordinates: geolocation-dev-coordinates (1.5 kB)
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke --function coordinates --data '{ "address1": "337 20th St","address2": "","city": "Miami Beach","state": "FL","postalCode": "33139"}'
```

Which should result in response similar to the following:

```json
{
    "lat": 25.7962812,
    "lng": -80.1307368
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function coordinates --data '{ "address1": "337 20th St","address2": "","city": "Miami Beach","state": "FL","postalCode": "33139"}'
```

Which should result in response similar to the following:

```
{
    "lat": 25.7962812,
    "lng": -80.1307368
}
```
