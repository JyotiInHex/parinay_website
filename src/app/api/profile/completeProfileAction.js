"use server";

import { connectDB } from "@/lib/db";
import UsersProfile from "@/models/userProfileSchema";
import User from "@/models/usersSchema";
import { generateUserBio, getZodiacFromName } from "@/utils/helpers";
import { getRandomMessage, profileMessages } from "@/utils/validators";

export default async function completeProfileAction(formData) {
  const data = {};
  for (const key of formData.keys()) {
    const values = formData.getAll(key);
    data[key] = values.length > 1 ? values : values[0] || "";
  }
  const zodiac = getZodiacFromName(data.name);
  const bio = generateUserBio(data);

  try {
    await connectDB();

    const user = await User.findOne({ _id: data.id, phone: data.phone });
    if (!user)
      return {
        success: false,
        message: getRandomMessage(profileMessages.notFound.complete),
      };

    let profileComplete = await UsersProfile.findOne({ mappedId: data.id }),
      message;
    if (profileComplete) {
      profileComplete = await UsersProfile.findOneAndUpdate(
        { mappedId: data.id },
        {
          $set: {
            mappedId: data.id,
            name: data.name,
            dob: data.dob,
            gender: data.gender,
            maritalStatus: data.maritalStatus ?? "Never Married",
            height: data.height,
            weight: data.weight,
            bodyType: data.bodyType ?? "Average",
            complexion: data.complexion ?? "Fair",
            religion: data.religion ?? "Hindu",
            otherReligion: data.otherReligion,
            community: data.community,
            motherTongue: data.motherTongue ?? "Assamese",
            otherMotherTongue: data.otherMotherTongue,
            gotra: data.gotra,
            zodiac: data.zodiac ?? zodiac,
            city: data.city,
            nativePlace: data.nativePlace,
            state: data.state ?? "Assam",
            otherState: data.otherState,
            country: data.country ?? "India",
            otherCountry: data.otherCountry,
            education: data.education ?? "Bachelor’s Degree",
            otherEducation: data.otherEducation,
            occupation: data.occupation,
            workType: data.workType ?? "Private Sector",
            otherWork: data.otherWork,
            income: data.income ?? "Less than ₹2 LPA",
            myDiet: data.myDiet ?? "Vegetarian",
            otherDiet: data.otherDiet,
            smoking: data.smoking ?? "Non-smoker",
            drinking: data.drinking ?? "Non-drinker",
            hobbies: data.hobbies,
            otherHobby: data.otherHobby,
            fatherOccupation: data.fatherOccupation,
            motherOccupation: data.motherOccupation,
            siblings: data.siblings,
            otherSiblings: data.otherSiblings,
            familyType: data.familyType ?? "Nuclear",
            familyBackground: data.familyBackground ?? "Middle Class",
            familyValues: data.familyValues ?? "Moderate",
            bio,
            preferredAge: data.preferredAge ?? "No preference",
            preferredHeight: data.preferredHeight ?? "Any",
            preferredReligion: data.preferredReligion ?? "Any",
            otherPreferredReligion: data.otherPreferredReligion,
            preferredCommunity: data.preferredCommunity,
            preferredGotra: data.preferredGotra,
            preferredEducation: data.preferredEducation ?? "No preference",
            otherPreferredEducation: data.otherPreferredEducation,
            preferredOccupation: data.preferredOccupation,
            preferredIncome: data.preferredIncome,
            preferredLifestyle: data.preferredLifestyle ?? "No preference",
            preferredDiet: data.preferredDiet ?? "Vegetarian",
            otherPreferredDiet: data.otherPreferredDiet,
            preferredFamilyType: data.preferredFamilyType ?? "Nuclear",
            preferredQualities: data.preferredQualities,
            preferredHobbies: data.preferredHobbies,
            partnerExpectations: data.partnerExpectations,
          },
        },
        { new: true }
      );

      message = getRandomMessage(profileMessages.success.update);
    } else {
      profileComplete = await UsersProfile.create({
        mappedId: data.id,
        name: data.name,
        dob: data.dob,
        gender: data.gender,
        maritalStatus: data.maritalStatus ?? "Never Married",
        height: data.height,
        weight: data.weight,
        bodyType: data.bodyType ?? "Average",
        complexion: data.complexion ?? "Fair",
        religion: data.religion ?? "Hindu",
        otherReligion: data.otherReligion,
        community: data.community,
        motherTongue: data.motherTongue ?? "Assamese",
        otherMotherTongue: data.otherMotherTongue,
        gotra: data.gotra,
        zodiac: data.zodiac ?? zodiac,
        city: data.city,
        nativePlace: data.nativePlace,
        state: data.state ?? "Assam",
        otherState: data.otherState,
        country: data.country ?? "India",
        otherCountry: data.otherCountry,
        education: data.education ?? "Bachelor’s Degree",
        otherEducation: data.otherEducation,
        occupation: data.occupation,
        workType: data.workType ?? "Private Sector",
        otherWork: data.otherWork,
        income: data.income ?? "Less than ₹2 LPA",
        myDiet: data.myDiet ?? "Vegetarian",
        otherDiet: data.otherDiet,
        smoking: data.smoking ?? "Non-smoker",
        drinking: data.drinking ?? "Non-drinker",
        hobbies: data.hobbies,
        otherHobby: data.otherHobby,
        fatherOccupation: data.fatherOccupation,
        motherOccupation: data.motherOccupation,
        siblings: data.siblings,
        otherSiblings: data.otherSiblings,
        familyType: data.familyType ?? "Nuclear",
        familyBackground: data.familyBackground ?? "Middle Class",
        familyValues: data.familyValues ?? "Moderate",
        bio,
        preferredAge: data.preferredAge ?? "No preference",
        preferredHeight: data.preferredHeight ?? "Any",
        preferredReligion: data.preferredReligion ?? "Any",
        otherPreferredReligion: data.otherPreferredReligion,
        preferredCommunity: data.preferredCommunity,
        preferredGotra: data.preferredGotra,
        preferredEducation: data.preferredEducation ?? "No preference",
        otherPreferredEducation: data.otherPreferredEducation,
        preferredOccupation: data.preferredOccupation,
        preferredIncome: data.preferredIncome,
        preferredLifestyle: data.preferredLifestyle ?? "No preference",
        preferredDiet: data.preferredDiet ?? "Vegetarian",
        otherPreferredDiet: data.otherPreferredDiet,
        preferredFamilyType: data.preferredFamilyType ?? "Nuclear",
        preferredQualities: data.preferredQualities,
        preferredHobbies: data.preferredHobbies,
        partnerExpectations: data.partnerExpectations,
      });
      message = getRandomMessage(profileMessages.success.complete);
    }

    const userMapped = profileComplete.mappedId;
    if (userMapped) {
      await User.findOneAndUpdate(
        { _id: userMapped },
        { profileStatus: "completed", createdAt: new Date() },
        { upsert: true, new: true }
      );
    }

    return {success: true, message, redirection: `/profile/${userMapped}`};
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong!— ",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
