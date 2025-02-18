const MONGO_URI = process.env.MONGO_URI || "mongoad:AdG7bl9Z002E5TRE@cluster0.zpaqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB Successfully'))
  .catch(err => console.error('MongoDB Connection Error:', err));   