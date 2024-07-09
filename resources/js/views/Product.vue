<template>
  <div v-if="notFound">
    <NotFound />
  </div>
  <div v-else class="product-page">
    <div class="container my-0 my-md-4">
      <div class="row align-items-center justify-content-between">
        <div class="col-12 col-md-5 p-0 p-md-2">
          <div class="d-flex flex-column">
            <div class="col-12 px-md-2 d-none d-md-block">
              <div class="" style="cursor: pointer">
                <b-img :src="mainImage" alt="" style="width: 100%" class="image" @click="showMainImage()"></b-img>
              </div>
            </div>

            <div class="d-block d-md-none col-12 px-0">
              <b-carousel v-model="slide" controls :interval="0">
                <b-carousel-slide v-for="(image, index) in images" :key="index" :img-src="image"></b-carousel-slide>
              </b-carousel>
            </div>

            <div class="col-12 d-none d-md-block my-4">
              <div class="row">
                <div class="col-3" v-for="(image, index) in images" :key="index">
                  <div class="thumbnail" @click="changeMainImage(image)">
                    <b-img :src="image" style="width: 100%" alt="" class="image" :class="mainImage === image ? 'active' : ''"></b-img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 text-left my-3">
          <div class="container">
            <div class="mt-2 mb-4">
              <span class="product-title">{{ title }}</span>
            </div>

            <div class="my-3">
              <span class="text-muted">
                {{ description }}
              </span>
            </div>

            <div class="row">
              <div class="col-8 col-md-12 d-flex flex-row align-items-center">
                <div>
                  <span class="product-price">${{ parseFloat(price).toFixed(2) }}</span>
                </div>
                <div>
                  <span class="discount">{{ discountAmount }}%</span>
                </div>
              </div>

              <div class="col-4 col-md-12 my-1">
                <span class="original-price">${{ originalPrice.toFixed(2) }}</span>
              </div>
            </div>

            <div class="my-3 row">
              <div class="col-12 col-md-4 text-center px-md-0 mt-3">
                <div class="bg-quantity d-flex flex-row justify-content-between">
                  <div class="plus-minus" @click="decrement">
                    <i class="fas fa-minus"></i>
                  </div>
                  <div>{{ count }}</div>
                  <div class="plus-minus" @click="increment">
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-8 mt-3">
                <b-button class="bg-add-cart border-0" :disabled="count === 0" style="width: 80%" @click="submit">
                  <span class="mx-3">
                    <i class="fas fa-shopping-cart text-white"></i>
                  </span>
                  <span>Add to cart</span>
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <b-modal v-model="showImageModal" variant="transparent" size="md" backdrop shadow hide-footer>
        <template #modal-header-close>
          <i class="fas fa-times" style="color: #fff"></i>
        </template>
        <div class="container">
          <div class="d-flex flex-column">
            <div class="col-12 px-0 px-md-2">
              <div>
                <b-carousel v-model="slide" controls :interval="0">
                  <b-carousel-slide v-for="(image, index) in images" :key="index" :img-src="image"></b-carousel-slide>
                </b-carousel>
              </div>
            </div>

            <div class="col-12 my-3">
              <div class="row">
                <div class="col-3" v-for="(image, index) in images" :key="index">
                  <div class="thumbnail">
                    <b-img :src="image" style="width: 100%" alt="" class="image" :class="index === slide ? 'active' : ''"></b-img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import NotFound from './NotFound.vue';
import axios from 'axios';

export default {
  name: 'ProductPage',
  components: {
    NotFound
  },
  data() {
    return {
      tableData: null,
      showImageModal: false,
      slide: 0,
      notFound: false,
      count: 1,
      mainImage: '',
      images: [],
      title: '',
      description: '',
      price: 0,
      discountAmount: 0,
      originalPrice: 0,
    };
  },
  mounted() {
    const items = JSON.parse(localStorage.getItem('myCart'));
    if (items) {
      this.cartItems = items;
    }
  },
  computed: {
    cartItemsCount() {
      return this.cartItems.length;
    }
  },
  methods: {
    showMainImage() {
      this.showImageModal = true;
    },
    increment() {
      this.count += 1;
    },
    decrement() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },
    changeMainImage(image) {
      this.mainImage = image;
    },
    fetchData() {
      const url = `/client/products/${this.$route.params.slug}`;
      axios.get(url).then(response => {
        if (response.status === 200) {
          this.tableData = response.data.data;
          this.title = this.tableData.name;
          this.description = this.tableData.description;
          this.price = this.tableData.price.discounted;
          this.originalPrice = this.tableData.price.full;
          this.discountAmount = this.tableData.discount.amount;
          this.mainImage = this.tableData.images[0];
          this.images = this.tableData.images;
        }
      }).catch(error => {
        if (error.response && error.response.status === 404) {
          this.notFound = true;
        }
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
.product-page {
  font-family: Arial, sans-serif;
}
.product-title {
  font-size: 40px;
  font-weight: 900;
  color: black;
  line-height: 2.8rem;
}
.product-price {
  font-size: 16px;
  font-weight: 900;
}
.discount {
  background-color: hsl(25, 100%, 94%);
  font-weight: 900;
  font-size: 14px;
  color: hsl(26, 100%, 55%);
  padding: 2px 8px;
  margin-left: 8px;
}
.original-price {
  font-weight: 700;
  color: rgb(183, 183, 183);
  text-decoration: line-through;
}
.bg-quantity {
  background-color: #f1f1f1;
  border-radius: 10px;
  font-size: 16px;
  padding: 14px;
}
.bg-add-cart {
  background-color: hsl(26, 100%, 55%);
  color: white;
  border-radius: 10px;
  font-size: 15px;
  padding: 14px;
  transition: 0.3s;
  cursor: pointer;
}
.bg-add-cart:hover {
  background-color: hsl(24, 91%, 86%);
}
.plus-minus {
  color: hsl(26, 100%, 55%);
  cursor: pointer;
}
.thumbnail img {
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;
}
.thumbnail:hover img {
  opacity: 0.3;
}
.active {
  opacity: 0.4;
  border: 3px solid hsl(26, 100%, 55%);
}
.image {
  border-radius: 10px;
  height: 100%;
}
</style>
