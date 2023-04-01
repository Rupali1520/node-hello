
pipeline{
        
        
          
  agent any
        
        
          
  stages{
        
        
          
    stage('clone'){
        
        
          
      steps{
        
        
          
      git branch: 'devlopment', url: 'https://github.com/Rupali1520/node-hello.git'
        
        
          
      }}
        
        
          
    stage('run'){
        
        
          
      steps{
        
        
          
     sh '''npm pack 
npm start'''
        
        
          
      }}
        
        
          
  }
        
        
          }
