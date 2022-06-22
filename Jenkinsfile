@Library('ceiba-jenkins-library') _
pipeline {
  //Donde se va a ejecutar el Pipeline
  agent {
    label 'Slave_Induccion'
  }

  //Opciones específicas de Pipeline dentro del Pipeline
  options {
    buildDiscarder(logRotator(numToKeepStr: '3'))
 		disableConcurrentBuilds()
  }

  //Una sección que define las herramientas “preinstaladas” en Jenkins
  tools {
    nodejs 'NodeJS16'
  }

  //Aquí comienzan los “ítems” del Pipeline
  stages{
    stage('NPM Install') {
      steps {
        echo "------------>Installing<------------"
        sh 'npm install'
      }
    }

    stage('Unit Test') {
      steps {
        echo "------------>Testing<------------"
        sh 'ng test'
      }
    }

    stage('Test end-to-end') {
      steps{
        echo "------------>Testing Protractor<------------"
        sh 'ng e2e'
      }
    }

    stage('Static Code Analysis') {
      steps{
        sonarqubeMasQualityGatesP(sonarKey:'co.com.ceiba.adn:freak.store.front-alexander.cabanillas', 
        sonarName:'CeibaADN-FreakStore-Front', 
        sonarPathProperties:'./sonar-project.properties')
      }
    }

    stage('Build') {
      steps {
        echo "------------>Building<------------"
        sh 'npm run build'
      }
    }
  }

  post {
    always {
      echo 'This will always run'
    }
    success {
      echo 'This will run only if successful'
    }
    failure {
      echo 'This will run only if failed'
    	  //send notifications about a Pipeline to an email  	  
      mail (to: 'alexander.cabanillas@ceiba.com.co',
    	subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
    	body: "Something is wrong with ${env.BUILD_URL}")
    }
    unstable {
      echo 'This will run only if the run was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}
