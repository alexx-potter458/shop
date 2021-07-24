<template>
  <div>

    <div class="main">
      <div class="item">
        <div class="title">Be in touch</div>
        <div class="link">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          reiciendis officia praesentium
        </div>

        <div class="mail">
          <input type="email" name="" id="" placeholder="Your mail here" />
          <i class="fas fa-envelope"></i>
        </div>
      </div>

      <div v-for="item in categories" :key="item" class="item">
        <div class="title">
          <div class="hideSmalll">{{ item.name }}</div> 
          <div class="hideMaxx smallTitle"><span>{{ item.name }}</span><i class="fas fa-plus"></i></div> 
        </div>
        <div class="hideSmalll">
            <a v-for="link in item.subLinks" :key="link" href="" class="link">
                {{ link }}
            <div class="myBorder"></div>
            </a>
        </div>
        
      </div>
    </div>

    <div class="px-5 d-flex copyrights">
        <p>© 2021 Potter Inc. All rights reserved.</p>
        <p class="footerLinks">
            <a href="">Terms and Conditions</a>
            <a href="">Privacy and cookies</a>
            <a href="">Accesibility</a>
            <a href="">Customer data</a>
        </p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: "Shop",
          subLinks: ["For Women", "For Men", "Stores", "Our Blog", "Shop"],
        },
        {
          name: "Company",
          subLinks: [
            "Login",
            "Register",
            "Bye",
            "Wishlist",
            "Our Products",
            "Checkouts",
          ],
        },
        {
          name: "Your Account",
          subLinks: [
            "Register",
            "Bye",
            "Wishlist",
            "Login",
            "Our Products",
            "Checkouts",
          ],
        },
      ],
    };
  },
  methods: {
      expander: function() {
          let expanders = document.getElementsByClassName('hideMaxx')

          for(let expander of expanders) {
              expander.addEventListener('click', function(){
                event.target.parentElement.nextSibling.classList.toggle('hideSmalll');
              })
          }
      }
  },
  mounted() {
      this.expander();
  }
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  padding: 5em;
}
.item {
  max-width: 400px;
  color: gray;
}
.item .link {
  color: gray;
  margin-bottom: 1em;
}

.title {
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 1em;
}

.mail input, i {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  border: none;
  color: gray;
  transition: 0.5s;
}

.mail input {
    width:380px;
}
.mail {
  border-bottom: 1px solid gray;
  width: fit-content;
  margin-bottom: 1em;
  transition: 0.5s;
}

.mail:focus-within {
  border-bottom: 1px solid black;
  color: black;
}

.mail:focus-within i {
  color: black;
}
.mail:focus-within input {
  color: black;
}

a.link {
  display: block;
  margin-bottom: -1em;
  margin-top: -0.5em;
  width: fit-content;
 
  overflow: hidden;
}

a.link:hover {
  color: black;
}

.myBorder {
  background-color: black;
  height: 2px;

  transform: translateX(-50%) scaleX(0);
  transition: 0.5s;
}

a.link:hover .myBorder {
  transform: translateX(0%) scaleX(1);
}

.copyrights p {
    font-size: 14px;
    color: gray;
}

.footerLinks a{
    font-size: 14px;
    color: gray;
    margin-right: 1em;
}

.footerLinks a:hover {
    border-bottom: 1px solid gray;
}

.copyrights {
    flex-direction: row;
    justify-content: space-between;
}

 

@media screen and (min-width:900px) {
    .hideMaxx {
        visibility: hidden;
        position: absolute;
        width: 0;
        height: 0;
    }
}  

@media screen and (max-width:900px) {
    .main{
        display: flex;
        flex-direction: column;
        padding: 3em;
    }
    .item {
        max-width: fit-content;
    }
    
    .copyrights {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        flex-wrap: nowrap;
    }

     .hideSmalll {
        visibility: hidden;
        position: absolute;
        width: 0;
        height: 0;
    }
    .smallTitle {
      cursor: pointer;
      width: 400px;
      display: flex;
      justify-content: space-between;
    }
}

</style>