git reset HEAD .
git co -- .
git ls-files . --exclude-standard --others | xargs rm
git co $1
