pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t inntapv2-nginx .'
            }
        }

        stage('Deploy Docker Container') {
            steps {
                sh 'docker rm -f inntapv2-app || true'
                sh 'docker run -d -p 9009:9009 --name inntapv2-app inntapv2-nginx'
            }
        }
    }
}
