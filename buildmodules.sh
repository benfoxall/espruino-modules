#!/bin/bash
# Copyright (c) 2013 Gordon Williams, Pur3 Ltd. See the file LICENSE for copying permission.
cd `dirname $0`

DIR=`pwd`
MODULEDIR=$DIR/lib

mkdir -p $MODULEDIR

# clear out the modules just in case
rm $MODULEDIR/*

cd EspruinoDocs
MODULES=`find devices modules boards -name "*.js"`

for module in $MODULES; do
 if [ -f $module ]; then
  echo ">>>>" $module                                                 # e.g. <module-path>/DS18B20.js

  BNAME=`basename $module .js`                                        # e.g. 'DS18B20'

  cp $module $MODULEDIR/$BNAME.js
 fi
done

../node_modules/.bin/cjs-to-es6 $MODULEDIR/
