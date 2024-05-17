<template>
  <div>
    <Card class="video-card" v-for="video in videos" :key="video.id">
      <div class="video-thumbnail">
        <img :src="video.thumbnailUrl" alt="Video Thumbnail">
      </div>
      <div class="video-details">
        <h2>{{ video.videoTitle || 'Título del Video' }}</h2>
        <div class="stats">
          <p class="view-count">Visualizaciones: {{ video.viewCount || '0' }}</p>
          <p class="rpm-text">RPM:</p>
          <div class="rpm-indicator" :style="{ backgroundColor: getRpmColor(video.rpm) }">
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import reportService from "@/analytics/services/reportService.js";

export default {
  name: 'VideoCard',
  data() {
    return {
      videos: []
    };
  },
  methods: {
    getRpmColor(rpm) {
      if (rpm < 1) {
        return 'red';
      } else if (rpm >= 1 && rpm < 1.5) {
        return 'darkred';
      } else if (rpm >= 1.5 && rpm < 2) {
        return 'yellow';
      } else if (rpm >= 2 && rpm < 3) {
        return 'green';
      } else {
        return 'darkgreen';
      }
    }
  },
  mounted() {
    reportService.fetchVideos()
        .then(data => {
          this.videos = data;
        });
  }
};
</script>

<style scoped>
/* Estilos específicos para el componente de la tarjeta de video */

.video-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.video-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.video-thumbnail {
  width: 120px;
  height: 90px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 1rem;
}

.video-thumbnail img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.video-details {
  flex: 1;
}

.video-details h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.stats {
  display: flex;
  align-items: center;
}

.stats p {
  margin: 0;
  margin-right: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.rpm-indicator {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>
