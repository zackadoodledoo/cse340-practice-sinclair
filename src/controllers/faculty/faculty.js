import { getFacultyById, getSortedFaculty } from '../../models/faculty/faculty.js';

/**
 * Render the faculty list page
 * Retrieves all faculty members, sorted by department
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const facultyListPage = (req, res, next) => {
  try {
    // Get the sort parameter from query string, default to 'department'
    const sortBy = req.query.sort || 'department';
    
    // Get sorted faculty list
    const facultyList = getSortedFaculty(sortBy);
    
    // Render the faculty list page
    res.render('faculty/list', {
      title: 'Faculty',
      faculty: facultyList,
      currentSort: sortBy
    });
  } catch (error) {
    // Pass error to next middleware for handling
    next(error);
  }
};

/**
 * Render individual faculty detail page
 * Looks up a specific faculty member by ID and displays their details
 * @param {Object} req - Express request object with facultyId param
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const facultyDetailPage = (req, res, next) => {
  try {
    const { facultyId } = req.params;
    
    // Validate that facultyId was provided
    if (!facultyId) {
      const err = new Error('Faculty ID is required');
      err.status = 400;
      return next(err);
    }
    
    // Look up the faculty member by ID
    const facultyMember = getFacultyById(facultyId);
    
    // Check if faculty member exists
    if (!facultyMember) {
      const err = new Error(`Faculty member with ID '${facultyId}' not found`);
      err.status = 404;
      return next(err);
    }
    
    // Render the faculty detail page
    res.render('faculty/detail', {
      title: `${facultyMember.name} - Faculty`,
      faculty: facultyMember,
      facultyId: facultyId
    });
  } catch (error) {
    // Pass error to next middleware for handling
    next(error);
  }
};
