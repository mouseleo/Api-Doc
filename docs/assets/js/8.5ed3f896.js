(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{208:function(t,n,a){"use strict";a.r(n);var s=a(0),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker"}},[t._v("Docker")]),t._v(" "),a("p",[t._v("Want to start fast? use the official image of the docker")]),t._v(" "),a("h2",{attrs:{id:"docker-compose"}},[t._v("Docker Compose")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[t._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.3"')]),t._v("\n\nservices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  pg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("11.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n    container_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("database\n    environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      POSTGRES_USER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" admin\n      POSTGRES_PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" admin\n      POSTGRES_DB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" databaseName\n    volumes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/postgresql/data\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/localtime:/etc/localtime:ro"')]),t._v("\n    networks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" apidoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("network\n\n  server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" joaomede/apidoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1.4.1\n    container_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"server-api-doc"')]),t._v("\n    depends_on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" pg\n    links"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" pg\n    environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      HOSTDB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pg\n      POSTGRES_USER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" admin\n      POSTGRES_PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" admin\n      POSTGRES_DB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" databaseName\n      NODE_ENV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dev\n      HOSTSMTP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" smtp.gmail.com\n      PORTSMTP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'587'")]),t._v("\n      EMAIL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" a@gmail.com\n      PASSSWORDSMTP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 123\n      SECRET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" teste\n    ports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("80\n    volumes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/localtime:/etc/localtime:ro"')]),t._v("\n    networks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" apidoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("network\n\nnetworks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  apidoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bridge\n")])])]),a("p",[t._v('Check the repository for the latest version of the docker image and replace it in the "image" field')]),t._v(" "),a("h2",{attrs:{id:"start"}},[t._v("Start!")]),t._v(" "),a("p",[t._v("To start, just type the standard command "),a("strong",[a("code",[t._v("docker-compose up -d")])]),t._v(', and the service will start in the background, along with it, a folder called "postgres" will be generated, it will contain the database data, be careful with this folder.')])])}),[],!1,null,null,null);n.default=e.exports}}]);