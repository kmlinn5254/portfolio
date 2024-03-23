import 'package:flutter/material.dart';

import '../statics/key_holders.dart';
import '../statics/data_values.dart';
import '../theme/app_theme.dart';
import '../widgets/button_text.dart';
import '../widgets/text_pairs.dart';
import '../widgets/container_card.dart';
import '../widgets/container_banner.dart';
import '../widgets/frame_title.dart';

class DS2AboutMe extends StatelessWidget {
  const DS2AboutMe({Key? key}) : super(key: key);

  Widget bio(BuildContext context) {
    return SizedBox(
      //color: Colors.blue,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                TextPairs().aboutMe(
                  title: DataValues.aboutMeBiographyTitle,
                  description: DataValues.aboutMeBiographyDescription,
                ),
                const SizedBox(height: 40.0),
                ButtonTextSmall(
                  text: 'View Full Biography >>',
                  message: DataValues.comingSoon.toString(),
                  url: DataValues.comingSoon,
                ),
              ],
            ),
          ),
          SizedBox(width: MediaQuery.of(context).size.width * 0.08),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                TextPairs().aboutMe(
                  title: DataValues.aboutMeFullNameTitle,
                  description: DataValues.aboutMeFullNameDescription,
                ),
                const SizedBox(height: 30.0),
                TextPairs().aboutMe(
                  title: DataValues.aboutMeNickNameTitle,
                  description: DataValues.aboutMeNickNameDescription,
                ),
                const SizedBox(height: 30.0),
                TextPairs().aboutMe(
                  title: DataValues.aboutMeGenderTitle,
                  description: DataValues.aboutMeGenderDescription,
                ),
                const SizedBox(height: 30.0),
                TextPairs().aboutMe(
                  title: DataValues.aboutMeDobTitle,
                  description: DataValues.aboutMeDobDescription,
                ),
                const SizedBox(height: 30.0),
                TextPairs().aboutMe(
                  title: DataValues.aboutMeLanguageTitle,
                  description: DataValues.aboutMeLanguageDescription,
                ),
                const SizedBox(height: 30.0),
                TextPairs().aboutMe(
                  title: DataValues.aboutMeNationalityTitle,
                  description: DataValues.aboutMeNationalityDescription,
                ),
              ],
            ),
          ),
          SizedBox(width: MediaQuery.of(context).size.width * 0.08),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                TextPairs().aboutMe(
                  title: DataValues.aboutMePhoneTitle,
                  description: DataValues.aboutMePhoneDescription,
                ),
                const SizedBox(height: 30.0),
                TextPairs().aboutMe(
                  title: DataValues.aboutMeLocationTitle,
                  description: DataValues.aboutMeLocationDescription,
                ),
                const SizedBox(height: 30.0),
                TextPairs().aboutMe(
                  title: DataValues.aboutMeWorkDomainTitle,
                  description: DataValues.aboutMeWorkDomainDescription,
                ),
                const SizedBox(height: 30.0),
                TextPairs().aboutMe(
                  title: DataValues.aboutMeHobbiesTitle,
                  description: DataValues.aboutMeHobbiesDescription,
                ),
                const SizedBox(height: 30.0),
                TextPairs().aboutMe(
                  title: DataValues.aboutMeGoalTitle,
                  description: DataValues.aboutMeGoalDescription,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget titles(BuildContext context) {
    return SizedBox(
      //color: Colors.red,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: ContainerCard().type1(
              title: DataValues.aboutMeStudentTitle,
              description: DataValues.aboutMeStudentDescription,
              image: 'assets/icons/student.png',
              message: DataValues.linkedinURL.toString(),
              url: DataValues.linkedinURL,
            ),
          ),
          SizedBox(width: MediaQuery.of(context).size.width * 0.03),
          Expanded(
            child: ContainerCard().type1(
              title: DataValues.aboutMeDeveloperTitle,
              description: DataValues.aboutMeDeveloperDescription,
              image: 'assets/icons/developer.png',
              message: DataValues.linkedinURL.toString(),
              url: DataValues.linkedinURL,
            ),
          ),
          SizedBox(width: MediaQuery.of(context).size.width * 0.03),
          Expanded(
            child: ContainerCard().type1(
              title: DataValues.aboutMeVolunteerTitle,
              description: DataValues.aboutMeVolunteerDescription,
              image: 'assets/icons/volunteer.png',
              message: DataValues.linkedinURL.toString(),
              url: DataValues.linkedinURL,
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      key: KeyHolders.aboutKey,
      color: AppThemeData.backgroundGrey,
      child: Padding(
        padding: const EdgeInsets.all(40.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const FrameTitle(
              title: DataValues.aboutMeTitle,
              description: DataValues.aboutMeDescription,
            ),
            const SizedBox(height: 40.0),
            bio(context),
            const SizedBox(height: 40.0),
            titles(context),
            const SizedBox(height: 80.0),
            Center(
              child: ContainerBanner().type1(
                isDesktop: true,
                title1: DataValues.aboutMeBanner,
                title2: DataValues.aboutMeBannerTitle,
                description: DataValues.aboutMeBannerWeb,
                image: 'logo',
                message: 'View Profiles',
                url: DataValues.comingSoon,
              ),
            ),
          ],
        ),
      ),
    );
  }
}