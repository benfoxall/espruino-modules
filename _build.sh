#!/bin/bash
# Copyright (c) 2013 Gordon Williams, Pur3 Ltd. See the file LICENSE for copying permission.
cd `dirname $0`

mkdir -p es
mkdir -p cjs

rm es/* cjs/*

DOCS=EspruinoDocs
MODULES=`find $DOCS/devices $DOCS/modules $DOCS/boards -name "*.js"`

for module in $MODULES; do
 if [ -f $module ]; then

  BNAME=`basename $module .js`

  cp $module $BNAME.js

 fi
done
