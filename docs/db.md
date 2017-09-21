Using the db laout from https://medium.com/@tjmonsi/learning-firebase-structuring-your-data-to-show-filtered-list-making-a-blog-pt-1-b4f4635c05a4

Let’s add a few more details:


* the User has a role: “admin”, “editor”, “contributor”, or “member”
* a “member” can only create / edit / delete their Comment.
* a “contributor” can do any functionalities the “member” can, and also create / edit / delete their own Article.
* an “editor” can do any functionalities the “member” and “contributor” can, and can set any Article to be published and be seen by all. They can also give promote any “member” into a “contributor” as well.
* an “admin” can do all of the above, and also can promote any “member”, “contributor”, or “editor” into an “editor” or “admin”.
* An Article can only have one author (as of the moment, more on this later), but has many Comments.
* An Article will only be viewed by all if it is published (published == true), or will only be viewed by the “admin”, “editor” or the owner if it is not published.
* An Article can be found using the slug_name, which is the “slugified” title or the Article plus random characters for uniqueness.
