/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTweet2rekognition = /* GraphQL */ `
  subscription OnCreateTweet2rekognition(
    $favorite: Int
    $id: ID
    $retweet: Int
    $timestamp: AWSTimestamp
    $updated_at_date: AWSTimestamp
  ) {
    onCreateTweet2rekognition(
      favorite: $favorite
      id: $id
      retweet: $retweet
      timestamp: $timestamp
      updated_at_date: $updated_at_date
    ) {
      favorite
      id
      retweet
      timestamp
      updated_at_date
      updated_at_time
      user_name
      user_screen_name
      img
    }
  }
`;
export const onUpdateTweet2rekognition = /* GraphQL */ `
  subscription OnUpdateTweet2rekognition(
    $favorite: Int
    $id: ID
    $retweet: Int
    $timestamp: AWSTimestamp
    $updated_at_date: AWSTimestamp
  ) {
    onUpdateTweet2rekognition(
      favorite: $favorite
      id: $id
      retweet: $retweet
      timestamp: $timestamp
      updated_at_date: $updated_at_date
    ) {
      favorite
      id
      retweet
      timestamp
      updated_at_date
      updated_at_time
      user_name
      user_screen_name
      img
    }
  }
`;
export const onDeleteTweet2rekognition = /* GraphQL */ `
  subscription OnDeleteTweet2rekognition(
    $favorite: Int
    $id: ID
    $retweet: Int
    $timestamp: AWSTimestamp
    $updated_at_date: AWSTimestamp
  ) {
    onDeleteTweet2rekognition(
      favorite: $favorite
      id: $id
      retweet: $retweet
      timestamp: $timestamp
      updated_at_date: $updated_at_date
    ) {
      favorite
      id
      retweet
      timestamp
      updated_at_date
      updated_at_time
      user_name
      user_screen_name
      img
    }
  }
`;