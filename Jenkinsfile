
pipeline{
        
        
          
  agent any
        
        
          
  stages{
        
        
          
    stage('clone'){
        
        
          
      steps{
        
        
          
      git branch: 'testing', url: 'https://github.com/Rupali1520/node-hello.git'
        
        
          
      }}
        
        
          
    stage('run'){
        
        
          
      steps{
        
        
          
     sh '''javac index.java
        
        
          
java index'''
        
        
          
      }}
        
        
          
  }
        
        
          }
