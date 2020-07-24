#### Como rodar?
`docker build .`

`docker run -it -p 8888:80 -d @build_id sh`

ou

`docker run -it -p 8883:80 --name @nome_container -d @build_id sh`
