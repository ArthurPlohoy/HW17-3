var express = require('express')
    bodyParser = require('body-parser');
    app = express();
    app.use(bodyParser.urlencoded( {extended: true} ) );
    app.use(bodyParser.json() );

var posts = [
  {title: "Первый блог", content: "Несколько респондентов отмечали, что изначально задумывали создать персональную страничку (сайт в Интернете), но позже, узнав о том, насколько легко вести блог, предпочли эту форму изложения информации о себе. Существует класс блогов, предназначенных для публикации и обсуждения произведений автора (прозы, стихов, фотографий, рисунков), однако и обычный дневник несомненно несёт информацию о личности автора. «Веду дневник, чтобы меня читали», — могут сказать многие блогеры." },
  {title: "Второй блог", content: "Как и традиционный бумажный дневник, блог, помимо новых функций, может осознаваться и как несущий функцию мемуаров, места для каких-то записей, которые могут пригодиться в будущем, способом не забыть о подробностях тех или иных событий своей жизни. Пользующиеся этой функцией респонденты полагают, что ведут дневник для себя, для того чтобы потом читать, для того чтобы записывать что-то, что хочется помнить. И подумать об этом позже. Авторы создают нечто вроде отложенной коммуникации с самим собой."},
  {title: "Третий блог", content: "Эта функция связана с тем, что блог предоставляет возможность участникам создать образ иного Я, возможно, такого, к которому автор стремится. («Я начинал журнал как упражнение в открытости и спонтанности»). Некоторые отмечают, что публичность дневника вынуждает их продолжать его вести, а также заставляет учиться более грамотно структурировать свои мысли, что помогает им самим лучше понять переживаемые события («При изложении своей проблемы или идеи в письменном виде становится легче анализировать ситуацию»)." }
];
app.get('/', function (req, res){
  res.render("index.ejs", {posts: posts} );
} );

app.get ('/post/:id', function (req, res){
  var id = req.params.id;
  res.render('post.ejs', {post: posts[id - 1] } );
} );

app.get ('/write', function (req, res){
  res.render('write.ejs');
} );

app.post('/write', function (req, res){
  var title = req.body.title;
      content  = req.body.content;

  posts.push( {title: title, content: content} );
  res.redirect('/');
})


app.listen(3000, function(){
  console.log('Work on port 3000');
} );
