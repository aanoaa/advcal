# Requirements #

    # execute once
    $ npm install -g grunt-cli
    $ gem install bundler

    # execute often after `git pull`
    $ npm install
    $ bundle install

# Run #

    $ grunt
    $ bundle exec jekyll serve --baseurl '/advcal'    # http://localhost:5000/advcal/

# Articles #

Add `docs/2015-12-xx.md` and edit `docs/index.html`

```diff
-        <td><a href="2015-12-xx/">xx</a></td>
+        <td class="success"><a href="2015-12-xx/">xx</a></td>
```
