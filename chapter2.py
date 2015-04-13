users={"Anna":{ "bbm":2.0, "doraemon":4.325}, "Joe":{"ff7":4.125,  "doraemon":3.275}, "Smith":{"ff7":1.25, "bbm":2.450, }}

def manhattan(rating1,rating2):
  distance=0
  for key in rating1:
    if key in rating2:
      distance+=abs(rating1[key] - rating2[key])
  return distance

def minkowski(rating1, rating2, r):
  distance=0
  commonRatings=False
  # calculate difference
  for key in rating1:
    if key in rating2:
      print 'in the loop'
      distance+=pow((abs(rating1[key] - rating2[key])),r)
      commonRatings= True
  if commonRatings:
    print 'true'
    return pow(distance, 1/r)
  else:
    print 'false'
    return 0

def computeNearestNeighbour(username,users):
  distances=[]
  for user in users:
    if user != username:
      distance = minkowski(users[user],users[username],2)
      distances.append((distance, user))
  distances.sort()
  return distances  

def recommend(username, users):
  # get the name of the nearest neighbour
  nearestNeighbour = computeNearestNeighbour(username,users)[0][1]
  # computeNearestNeighbour return pair of tuple, we would like to pick the first 
  # one which will return the pair of our username
  # if we pick [0], it will return the tuple
  # we want the name, which locate in the second index of our tuple [0]
  # therefore we increment the index into [1]
  recommendations = []
  # get the list of their movies
  nearestNeighbourMov = users[nearestNeighbour]
  userMov = users[username]
  # get the recommendations
  for film in nearestNeighbourMov:
    if not film in userMov:
      recommendations.append((film, nearestNeighbourMov[film], nearestNeighbour))
  return sorted(recommendations, key=lambda filmTuple: filmTuple[1], reverse = True)
 