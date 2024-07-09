<template>
  <div class="not-found">
    <div class="not-found-content">
      <div class="error-text">
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
      <div class="error-details">
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <router-link to="/" class="home-link">Go to Homepage</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: hsl(223, 64%, 98%);
  color: hsl(220, 13%, 13%);
  font-family: 'Arial', sans-serif;
}

.not-found-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.error-text h1 {
  font-size: 6rem;
  margin: 0;
  color: hsl(26, 100%, 55%);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.error-text p {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: hsl(220, 13%, 13%);
}

.error-details p {
  font-size: 1.2rem;
  margin: 1rem 0;
  color: hsl(220, 13%, 13%);
}

.home-link {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: hsl(26, 100%, 55%);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
  font-weight: bold;
}

.home-link:hover {
  background-color: hsl(26, 100%, 45%);
  transform: scale(1.05);
}
</style>
