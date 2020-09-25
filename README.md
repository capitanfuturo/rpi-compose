# rpi-compose

rpi-compose is a `docker-compose.yaml` file that helps `developers` to have a set of `docker services configured`. The idea is to have a mini local server with the most 
usefull service for software developers.

I use this configuration with a Raspberry PI 3 model B

## Services configured

1. Portainer.io, port 9000
2. Mongo DB 3.x, port 27017
3. Mongo Express, port 8081
4. PostgreSQL, port 5432
5. PG Admin, port 5050
6. InfluxDB, port 8086
7. Telegraf
8. Grafana, port 3000

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed an Ubuntu Core to your raspberry-pi (maybe it can work with other distro)
* You have installed docker and docker-compose on your distro.

## Installing and using rpi-compose

To install rpi-compose, follow these steps:

```
git clone https://github.com/capitanfuturo/rpi-compose.git
cd rpi-compose
docker-compose up -d
```

## Contributing to rpi-compose
To contribute to rpi-compose, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

<!-- 
## Contributors

Thanks to the following people who have contributed to this project:

* [@scottydocs](https://github.com/scottydocs) 📖
* [@cainwatson](https://github.com/cainwatson) 🐛
* [@calchuchesta](https://github.com/calchuchesta) 🐛

You might want to consider using something like the [All Contributors](https://github.com/all-contributors/all-contributors) specification and its [emoji key](https://allcontributors.org/docs/en/emoji-key).
-->

## Contact

If you want to contact me you can reach me at giuseppe[dot]caliendo[@]gmail[dot]com.

## License
This project uses the following license: [MIT](LICENSE).
