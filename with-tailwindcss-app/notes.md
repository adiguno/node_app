# summary

- to deploy next js app:
- redirect the output of the build to a separate `.build/` directory, instead of the default `.next/`
  - add `  distDir: "build",` to `next.config.js`
  - add `    "build": "rm -rf ./build && NODE_ENV=production next build",` to remove previous build and set node environment vairable for gcp
- gcloud ignore the `/pages/` and other source code directories
- gcloud ignore the `.next`
- add port 8080 for gcp when starting the app `    "start": "next start -p 8080"` in `package.json`

```shell
dian@192 node_app % ls
app.yaml                node_modules            package-lock.json       package.json            server.js
dian@192 node_app % gcloud app deploy
You are creating an app for project [ai-tutor-374705].
WARNING: Creating an App Engine application for a project is irreversible and the region
cannot be changed. More information about regions is at
<https://cloud.google.com/appengine/docs/locations>.

Please choose the region where you want your App Engine application located:

 [1] asia-east1    (supports standard and flexible)
 [2] asia-east2    (supports standard and flexible and search_api)
 [3] asia-northeast1 (supports standard and flexible and search_api)
 [4] asia-northeast2 (supports standard and flexible and search_api)
 [5] asia-northeast3 (supports standard and flexible and search_api)
 [6] asia-south1   (supports standard and flexible and search_api)
 [7] asia-southeast1 (supports standard and flexible)
 [8] asia-southeast2 (supports standard and flexible and search_api)
 [9] australia-southeast1 (supports standard and flexible and search_api)
 [10] europe-central2 (supports standard and flexible)
 [11] europe-west   (supports standard and flexible and search_api)
 [12] europe-west2  (supports standard and flexible and search_api)
 [13] europe-west3  (supports standard and flexible and search_api)
 [14] europe-west6  (supports standard and flexible and search_api)
 [15] northamerica-northeast1 (supports standard and flexible and search_api)
 [16] southamerica-east1 (supports standard and flexible and search_api)
 [17] us-central    (supports standard and flexible and search_api)
 [18] us-east1      (supports standard and flexible and search_api)
 [19] us-east4      (supports standard and flexible and search_api)
 [20] us-west1      (supports standard and flexible)
 [21] us-west2      (supports standard and flexible and search_api)
 [22] us-west3      (supports standard and flexible and search_api)
 [23] us-west4      (supports standard and flexible and search_api)
 [24] cancel
Please enter your numeric choice:  1

Creating App Engine application in project [ai-tutor-374705] and region [asia-east1]....done.
Services to deploy:

descriptor:                  [/Users/dian/Documents/basic_projects/node_app/app.yaml]
source:                      [/Users/dian/Documents/basic_projects/node_app]
target project:              [ai-tutor-374705]
target service:              [default]
target version:              [20230116t141603]
target url:                  [https://ai-tutor-374705.de.r.appspot.com]
target service account:      [App Engine default service account]


Do you want to continue (Y/n)?  y

Beginning deployment of service [default]...
Created .gcloudignore file. See `gcloud topic gcloudignore` for details.
╔════════════════════════════════════════════════════════════╗
╠═ Uploading 5 files to Google Cloud Storage                ═╣
╚════════════════════════════════════════════════════════════╝
File upload done.
Updating service [default]...failed.
ERROR: (gcloud.app.deploy) Error Response: [7] Access Not Configured. Cloud Build has not been used in project ai-tutor-374705 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/cloudbuild.googleapis.com/overview?project=ai-tutor-374705 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.
dian@192 node_app %
```

- need to enable a biling account for the project
- to enable the Cloud Build Api
- to deploy

```shell
dian@192 node_app % gcloud app deploy
Services to deploy:

descriptor:                  [/Users/dian/Documents/basic_projects/node_app/app.yaml]
source:                      [/Users/dian/Documents/basic_projects/node_app]
target project:              [ai-tutor-374705]
target service:              [default]
target version:              [20230116t143110]
target url:                  [https://ai-tutor-374705.de.r.appspot.com]
target service account:      [App Engine default service account]


Do you want to continue (Y/n)?  y

Beginning deployment of service [default]...
╔════════════════════════════════════════════════════════════╗
╠═ Uploading 0 files to Google Cloud Storage                ═╣
╚════════════════════════════════════════════════════════════╝
File upload done.
Updating service [default]...done.
Setting traffic split for service [default]...done.
Deployed service [default] to [https://ai-tutor-374705.de.r.appspot.com]

You can stream logs from the command line by running:
  $ gcloud app logs tail -s default

To view your application in the web browser run:
  $ gcloud app browse
```

- update server.js to do some console logs and update the response message

```shell
dian@192 node_app % gcloud app deploy
Services to deploy:

descriptor:                  [/Users/dian/Documents/basic_projects/node_app/app.yaml]
source:                      [/Users/dian/Documents/basic_projects/node_app]
target project:              [ai-tutor-374705]
target service:              [default]
target version:              [20230116t143743]
target url:                  [https://ai-tutor-374705.de.r.appspot.com]
target service account:      [App Engine default service account]


Do you want to continue (Y/n)?  y

Beginning deployment of service [default]...
╔════════════════════════════════════════════════════════════╗
╠═ Uploading 2 files to Google Cloud Storage                ═╣
╚════════════════════════════════════════════════════════════╝
File upload done.
Updating service [default]...⠶
Updating service [default]...done.
Setting traffic split for service [default]...done.
Deployed service [default] to [https://ai-tutor-374705.de.r.appspot.com]

You can stream logs from the command line by running:
  $ gcloud app logs tail -s default

To view your application in the web browser run:
  $ gcloud app browse
```

- same url between deployments
- `gcloud app logs tail -s default` takes some time to see the logs

# NextJS

- remove all previous node files
- init nextjs project
- update app yaml node version to 18

```shell
dian@Dians-MacBook-Pro-2 with-tailwindcss-app % gcloud app deploy
Services to deploy:

descriptor:                  [/Users/dian/Documents/basic_projects/node_app/with-tailwindcss-app/app.yaml]
source:                      [/Users/dian/Documents/basic_projects/node_app/with-tailwindcss-app]
target project:              [ai-tutor-374705]
target service:              [default]
target version:              [20230116t175902]
target url:                  [https://ai-tutor-374705.de.r.appspot.com]
target service account:      [App Engine default service account]


Do you want to continue (Y/n)?  y

Beginning deployment of service [default]...
╔════════════════════════════════════════════════════════════╗
╠═ Uploading 45 files to Google Cloud Storage               ═╣
╚════════════════════════════════════════════════════════════╝
File upload done.
Updating service [default]...done.
Setting traffic split for service [default]...done.
Deployed service [default] to [https://ai-tutor-374705.de.r.appspot.com]

You can stream logs from the command line by running:
  $ gcloud app logs tail -s default

To view your application in the web browser run:
  $ gcloud app browse
```

- the app:

```
Error: Server Error
The server encountered an error and could not complete your request.
Please try again in 30 seconds.
```

- change the build command: `"build": "rm -rf ./build && NODE_ENV=production next build",`
- update next.config.js: `distDir: "build",`
- run `yarn build` again

```
Internal Server Error
```

- update gcloudignore for `/pages/` and `/.next/`
