// @Library('demo') _
// pipeline {
//     agent any
//     parameters{

//         choice(name: 'action', choices: 'create\ndelete', description: 'Choose create/Destroy')
//         // string(name: 'ImageName', description: "name of the docker build", defaultValue: 'javapp')
//         // string(name: 'ImageTag', description: "tag of the docker build", defaultValue: 'v1')
//         // string(name: 'DockerHubUser', description: "name of the Application", defaultValue: 'rupali1520')
//         string(name: 'aws_account_id', description: " AWS Account ID", defaultValue: '5414-0165-9537')
//         string(name: 'Region', description: "Region of ECR", defaultValue: 'ap-southeast-2')
//         string(name: 'ECR_REPO_NAME', description: "name of the ECR", defaultValue: 'rupali')
       
//     }
//     // environment{

//     //     ACCESS_KEY = credentials('AWS_ACCESS_KEY_ID')
//     //     SECRET_KEY = credentials('AWS_SECRET_KEY_ID')
//     // }

//     stages {
        
//         stage('git checkout') {
//                  when { expression {  params.action == 'create' } }
//             steps {
//                 gitcheckout(branch: "devlopment",url: "https://github.com/Rupali1520/node-hello.git")
                
//             }
//         }
//         stage('testing'){
//             when { expression {  params.action == 'create' } }
//             steps{
//                 mvmTest()
//             }
//         }
//         // stage('Docker Image Build'){
//         //  when { expression {  params.action == 'create' } }
//         //     steps{
//         //       script{
                   
//         //           docker("${params.ImageName}","${params.ImageTag}","${params.DockerHubUser}")
//         //       }
//         //     }
//         // }
//         // stage('Docker Image Push : DockerHub '){
//         //  when { expression {  params.action == 'create' } }
//         //     steps{
//         //       script{
                   
//         //           dockerImagePush("${params.ImageName}","${params.ImageTag}","${params.DockerHubUser}")
//         //       }
//         //     }
//         // }
//         stage('Docker Image Build : ECR'){
//          when { expression {  params.action == 'create' } }
//             steps{
//                 script{
                   
//                     docker("${params.aws_account_id}","${params.Region}","${params.ECR_REPO_NAME}")
//                 }
//             }
//         }
//         stage('Docker Image Push : ECR '){
//          when { expression {  params.action == 'create' } }
//             steps{
//                 script{
                   
//                     dockerImagePush("${params.aws_account_id}","${params.Region}","${params.ECR_REPO_NAME}")
//                 }
//             }
//         }
        
//     }
// }
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
