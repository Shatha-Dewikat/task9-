async function getPosts(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const posts = await response.json();

    const result = posts.map(function(post){
        return `
        <div class='users'>
            <p > ID: ${post.id}</p>
           <p>NAME: ${post.name}</p>
          <p>USERNAME: ${post.username}</p>
          <p>EMAIL:  ${post.email}</p>
         <p>PHONE:  ${post.phone}</p>
         <p>WEBSITE:  ${post.website}</p>
         
          
        </div>
        `
    }).join('');

    const result2 = posts.map(function(post){
        return `
        <div class='Ad'>
          <p > ID: ${post.id}</p>
            <p > STREET: ${post.address.street}</p>
            <p > SUITE: ${post.address.suite}</p>
              <p > CITY: ${post.address.city}</p>
                <p > ZIPCODE: ${post.address.zipcode}</p>
          
        </div>
        `
    }).join('');

    const result3 = posts.map(function(post){
        return `
        <div class='comp'>
          <p > ID: ${post.id}</p>
            <p > NAME: ${post.company.name}</p>
            <p > CATCHPHRASE: ${post.company.catchPhrase}</p>
              <p > BS: ${post.company.bs}</p>
            
          
        </div>
        `
    }).join('');

    document.querySelector(".main .container .row").innerHTML=result;
    document.querySelector(".main2 .container .row").innerHTML=result2;
    document.querySelector(".main3 .container .row").innerHTML=result3;
}

getPosts();

