import cv2
import numpy as np
import dlib

def face_landmark(imagem):
    classifier_dlib_68_path = './classificadores/shape_predictor_68_face_landmarks.dat'
    classifier_dlib = dlib.shape_predictor(classifier_dlib_68_path)
    detector_face = dlib.get_frontal_face_detector()

    retangulos = detector_face(imagem, 1)
    
    if len(retangulos) == 0:
        return []
    
    marcos = []
    
    for ret in retangulos:
        marcos.append(np.matrix([[p.x, p.y] for p in classifier_dlib(imagem,ret).parts()]))
    
    return marcos

def detect_faces(imagem):
    marcos = face_landmark(imagem)
    detector_face = dlib.get_frontal_face_detector()
    
    retangulos = detector_face(imagem, 1)
    
    if len(retangulos) == 0:
        return None
    
    for idx, ret in enumerate(retangulos):
        marco = marcos[idx]
        
        pontos = cv2.convexHull(marco)
        cv2.drawContours(imagem, [pontos], 0, (0,255,0), 2)
    
    return imagem

def detect_faces_points(imagem):
    marcos = face_landmark(imagem)

    for marco in marcos:
        for idx, ponto in enumerate(marco):
            centro = (ponto[0,0], ponto[0,1])
            cv2.circle(imagem, centro, 3, (255,255,0), -1)
    
    return imagem