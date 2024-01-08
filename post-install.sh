#!/bin/sh


ext=.tar.gz
version=3.40.1
folder=primevue-sass-theme
filename=${version}${ext}
dest=node_modules/${folder}
download_url=https://github.com/primefaces/${folder}/archive/refs/tags/${filename}


clean_node_modules () {
  echo 'Removing node_modules/primevue-sass-theme'
  rm -rf node_modules/primevue-sass-theme
}

clean_download () {
  echo 'Removing '${filename}
  rm -rf ${filename}*
}

download () {
  echo 'Downloading '${download_url}
  wget ${download_url}
}

extract () {
  echo 'Extract '${filename}
  tar -xzvf ${filename}
}

install () {
  echo 'Moving to node_modules'
  cp -R ${folder}-${version} ${dest}
}


# clean_download
# download
# extrac
clean_node_modules
install
# clean_download
